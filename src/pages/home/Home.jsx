import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { useUserContext } from '../../hooks/useUserContext'

export const Home = () => {
  const {user, getDatasUser} = useUserContext()
  const [loading, setLoading] = useState(true)
  
  const setup = async () => {
    setLoading(true)
    await getDatasUser()

    setLoading(false)
  }

  useEffect(() => {
    setup()
    
  }, [])


  if(loading) {
    return (
      <Loading/>
    )
  }

  return (
    <main>
      {user && <img src={"data:image/png;base64," + user.avatar}/>}
    </main>
  )
}
