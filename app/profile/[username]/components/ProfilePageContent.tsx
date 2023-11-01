"use client";

import { FollowInstance, Profile, Rating } from "@/types";

import ProfileHeader from "./ProfileHeader";
import RatingCalendar from "./RatingCalendar";
import ProfileRatingFeed from "./ProfileRatingFeed";

interface ProfilePageProps {
    profile: Profile;
    currentRating: Rating|null;
    followers: FollowInstance[];
    following: FollowInstance[];
};

const ProfilePageContent: React.FC<ProfilePageProps> = ({
    profile, currentRating, followers, following
}) => {
    return (
        <div className="flex flex-col gap-y-10 pt-24 pb-10 md:pb-16 md:px-16 text-forestGreen"> {/* Main container: contains header container & ratings container */}
            <ProfileHeader profile={profile} currentRating={currentRating} followerCount={followers.length} 
            followingCount={following.length} />
            <hr className="text-forestGreen" />
            <RatingCalendar user_id={profile.id} />
            <hr className="text-forestGreen" />
            <div className="pt-6">
                <ProfileRatingFeed profile={profile} />
            </div>
        </div>    
    );
}

export default ProfilePageContent;