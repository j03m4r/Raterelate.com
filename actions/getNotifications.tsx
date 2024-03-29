import { Notification } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

const getNotificationsByUser = async (): Promise<Notification[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    if (!session) { return [] }

    const { data, error } = await supabase.from('notifications').select('id, type, to_profile_id, from_profile:from_profile_id(*), created_at')
    .eq('to_profile_id', session.user.id)

    if (error) {
        console.log(error);
    }

    if (!data) {
        return [];
    }

    // @ts-ignore
    return data;
};

export default getNotificationsByUser;