"use client";

import { Button , Tabs, Tab, Card, CardBody} from "@heroui/react";
import { ArrowArcLeft, ArrowLeft, Gear } from "phosphor-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl ">
      <div className="flex flex-col p-2">
                  <div className="flex items-center justify-between mb-4">
          <Button isIconOnly variant="solid" className="mb-4 bg-gray-100">
            <ArrowLeft />
          </Button>
          <Button isIconOnly variant="solid" className="mb-4 bg-gray-100">
            <Gear />
          </Button>
        </div>
        
          <ProfileCard />
      </div>
        
                <ProfileTabs />
      </div>
    </div>
  );
}



const ProfileCard = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full overflow-hidden bg-white border border-gray-100 md:max-w-4xl rounded-2xl">
                <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794718.jpg"
            alt="Mountain Landscape"
            className="object-cover w-full h-40"
          />
                    <div className="absolute transform -translate-x-1/2 left-1/2 -bottom-12">
            <div className="overflow-hidden border-4 border-white rounded-full w-28 h-28">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg"
                alt="Avatar"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
                <div className="p-4 text-center pt-14 ">
          <h2 className="text-lg font-semibold">Surya Pratap Singh Chauhan</h2>
          <p className="text-sm text-gray-500">Photograph, Food Lover</p>
                    <div className="flex items-center justify-center mt-4 space-x-2">
            <Button variant="flat" className="w-full">
              Edit Profile
            </Button>
            <Button variant="flat" className="w-full">
              Edit Travel Status
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileTabs = () => {
  return (
      <div className="flex flex-col w-full mt-4 border-t border-gray-100 rounded-2xl">
      <Tabs  aria-label="Options"
      fullWidth
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0",
          cursor: "w-full md:w-24  bg-primary ",
          tab: " px-0 h-12 w-full",
          tabContent: "group-data-[selected=true]:text-primary ",
        }}
        color="primary"
        variant="underlined">
        <Tab key="posts" title="Posts" className="w-full "  >
       <PostGrid posts={posts} />
        </Tab>
        
        <Tab key="dashboard" title="Dashboard">
        sdfsf
        </Tab>
      </Tabs>
    </div>
  );
};
const PostGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:grid-cols-3 lg:grid-cols-3 ">
            {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
const PostCard = ({ post }) => {
  return (
    <div className="relative overflow-hidden transition-transform transform cursor-pointer broder-gray-100 hover:scale-105">
            <div className="aspect-[3/4]">
  <img
    src={post.imageUrl}
    alt={post.altText}
    className="object-cover w-full h-full "
  />
</div>
    </div>
  );
};


const posts = [
  {
    id: 1,
    imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/220905135137-01-manas-bhatia-future-cities-ai.jpg?c=original',
    altText: 'Mountain range at sunset',
  },
  {
    id: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2023/01/09/18/24/ai-generated-7708031_960_720.jpg',
    altText: 'City street at night',
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2024/05/29/04/32/ai-generated-8795168_1280.png',
    altText: 'Person in a library',
  },
  {
    id: 4,
    imageUrl: 'https://img.freepik.com/premium-photo/temple-mountain-with-tree-background_1153744-167073.jpg',
    altText: 'Close-up of coffee beans',
  },
  {
    id: 5,
    imageUrl: 'https://img.freepik.com/premium-photo/house-mountain-meadow-with-mountain-background_1109427-2436.jpg',
    altText: 'Person walking on a forest trail',
  },
  {
    id: 6,
    imageUrl: 'https://img.freepik.com/premium-photo/mountains-alps-with-clouds_1033579-136506.jpg',
    altText: 'A field of flowers',
  },
 
];
