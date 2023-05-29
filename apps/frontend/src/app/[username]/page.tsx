import { CardAvatar } from '@/components/card/Avatar'
import { CardBanner } from '@/components/card/Banner'
import { getUserDetailsByUsername } from '@/lib/getUserDetailsByUsername'
import { Spotify } from 'react-spotify-embed'
export default async function CardPage({
  params,
}: {
  params: {
    username: string
  }
}) {
  const user = await getUserDetailsByUsername(params.username)
  const SOCIAL_MEDIA = [
    {
      name: 'SPOTIFY',
      icon: '/icons/spotify.svg',
      value: user?.spotifyURL,
    },
    {
      name: 'GITHUB',
      icon: '/icons/github.svg',
      value: user?.githubURL,
    },
    {
      name: 'TWITTER',
      icon: '/icons/twitter.svg',
      value: user?.twitterURL,
    },
    {
      name: 'YOUTUBE',
      icon: '/icons/youtube.svg',
      value: user?.youtubeURL,
    },
    {
      name: 'INSTAGRAM',
      icon: '/icons/instagram.svg',
      value: user?.instagramURL,
    },
  ]
  return (
    <div>
      <div className="flex h-screen items-center justify-center ">
        <div
          className={` border-button-background flex w-[512px] max-w-lg flex-col space-x-2 space-y-2 rounded-3xl border p-8`}
          style={{
            backgroundColor: user?.card.premiumFeatures.colorBackground
              ? user?.card.premiumFeatures.colorBackground
              : '',
          }}
        >
          <div className="relative flex flex-col items-center justify-center">
            <CardAvatar user={user} />
            <CardBanner user={user} />
            <div className="mt-10 text-center">
              <p className="text-3xl font-bold">{user?.username}</p>
              <p className="font-semibold">{user?.card.bio}</p>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {SOCIAL_MEDIA.map((socialMedia) => {
                return (
                  <>
                    <a
                      className="bg-button-background border-button-background rounded-full border bg-opacity-30 p-2"
                      href={socialMedia.value}
                      target="_blank"
                    >
                      <img className="h-7 w-7" src={socialMedia.icon} />
                    </a>
                  </>
                )
              })}
            </div>
            <div className="mt-4">
              {user?.premium && <Spotify link={user?.card.premiumFeatures.spotifyEmbed!} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
