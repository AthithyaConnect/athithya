'use client'

import Image from 'next/image'
import { ChatCircle, UserPlus, MapPin } from 'phosphor-react'

export default function PostCard({
  user = {
    name: 'Abhinav',
    avatar: 'https://i.pravatar.cc/100?img=12',
    postedAt: '3 days ago',
  },
  title = '',
  quote = '',
  content = '',
  media = [], // array of { type: 'image' | 'video', url: '...' }
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-3 max-w-md mx-auto">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <Image
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">Posted {user.postedAt}</div>
        </div>
      </div>

      {/* Title */}
      {title && (
        <div className="relative rounded-xl overflow-hidden h-36">
          <Image
            src={media[0]?.url || ''}
            alt="cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-lg font-bold text-center px-2">
              {title}
            </h2>
          </div>
        </div>
      )}

      {/* Quote */}
      {quote && (
        <div className="bg-green-900 text-white text-center text-sm font-medium p-3 rounded-xl">
          “{quote}”
        </div>
      )}

      {/* Grid Images & Video */}
      <div className="grid grid-cols-2 gap-2">
        {media.slice(1, 5).map((item, idx) =>
          item.type === 'image' ? (
            <div key={idx} className="rounded-xl overflow-hidden">
              <Image
                src={item.url}
                alt={`media-${idx}`}
                width={500}
                height={500}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ) : (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <Image
                src={item.thumbnail}
                alt="video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Story Content */}
      {content && (
        <div className="bg-green-900 text-white text-sm p-4 rounded-xl leading-relaxed">
          "{content}"
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-around pt-2">
        <ChatCircle size={24} className="text-gray-700" />
        <UserPlus size={24} className="text-gray-700" />
        <MapPin size={24} className="text-gray-700" />
      </div>
    </div>
  )
}
