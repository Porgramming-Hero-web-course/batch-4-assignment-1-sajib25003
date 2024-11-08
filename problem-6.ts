{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates }
    }

    const myProfile: Profile = {
        name: 'John Cena',
        age: 30,
        email: 'john_cena@email.com'
    }

    const updatedProfile = updateProfile(myProfile, {
        age: 31,
    })

    console.log(updatedProfile);
}