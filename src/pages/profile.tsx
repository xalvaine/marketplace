import Head from 'next/head'
import Layout from '@/components/Layout'
import useUser from '@/lib/useUser'

const Profile = () => {
  const user = useUser()

  return (
    <Layout>
      {user.authorized && (
        <>
          <Head>
            <title>Profile private page</title>
          </Head>
          Очень очень очень секретная страница профиля
        </>
      )}
    </Layout>
  )
}

export default Profile
