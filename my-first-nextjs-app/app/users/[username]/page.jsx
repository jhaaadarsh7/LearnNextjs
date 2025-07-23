import { notFound } from "next/navigation"

async function getUserData(username){
    
     const users = {
    'jhaaadarsh7': { name: 'Adarsh', bio: 'Full Stack Developer', posts: 42 },
    'john': { name: 'John Doe', bio: 'Designer', posts: 28 },
    'jane': { name: 'Jane Smith', bio: 'Product Manager', posts: 35 }
  };

  return users[username] || null;
}

export default async function UserProfile({params}){
    const { username } = params;
    const user = await getUserData(username);

    if(!user){
        notFound();
    }

    return(
        <div className="profile-container">
            <div className="profile-header">
                <h1>@{username}</h1>
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
            </div>
          

          <div className="profile-stats">
        <div className="stat">
          <span className="number">{user.posts}</span>
          <span className="label">Posts</span>
        </div>
        <div className="stat">
          <span className="number">1.2k</span>
          <span className="label">Followers</span>
        </div>
        <div className="stat">
          <span className="number">856</span>
          <span className="label">Following</span>
        </div>
      </div>
        </div>
    )
}