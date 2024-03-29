export interface RatingLimited {
    id: number;
    rating: number;
    created_at: string;
};

export interface ProfileWithRatings {
    id: string;
    username: string;
    avatar_url: string;
    ratings: RatingLimited[];
};

export interface Profile {
    id: string;
    username: string;
    avatar_url: string;
    ratings?: Rating[];
};

export interface Rating extends RatingLimited {
    profiles: Profile;
    message: string;
    isPublic: boolean;
};

export interface ReplyingTo {
    id: string;
    username: string;
};

export interface ReplyRating extends Rating {
    replying_to?: ReplyingTo;
};

export interface LikedRating {
    rating_id: number;
    profile_id: string;
};

export interface Notification {
    id: number;
    type: number;
    to_profile_id: string;
    from_profile: Profile;
    created_at: string;
};

export interface FollowInstance {
    target_profile: Profile;
    follower_profile: Profile;
};