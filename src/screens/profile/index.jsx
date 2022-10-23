import React from "react"
import { useParams } from "react-router-dom"

const Profile = () => {
  const param = useParams()
  console.log("other", param)

  return (
    <div>
      <h4>Profile</h4>
    </div>
  )
}

export default Profile
