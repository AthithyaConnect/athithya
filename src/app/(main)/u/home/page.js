import PostCard from "@/components/cards/PostCard";

export default function Feed() {
  return (
    <div className="py-4">
      <PostCard
        user={{
          name: "Abhinav",
          avatar: "https://i.pravatar.cc/100?img=12",
          postedAt: "3 days ago",
        }}
        title="Tea Leaf Harvesting Festival"
        quote="You don’t just watch the harvest here. You feel it. You taste it. You become part of it."
        content="I came for tea. I left with stories. I danced with pickers, shared lunch with grandmothers, and walked between leaves that whispered history. This place doesn’t host tourists. It welcomes hearts."
        media={[
          {
            type: "image",
            url: "https://img.freepik.com/free-photo/view-woman-working-agricultural-sector-celebrate-labour-day-women_23-2151252033.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
          },
          {
            type: "image",
            url: "https://img.freepik.com/free-photo/rural-farm-scene-terraced-tea-crop-growth-mountain-backdrop-generated-by-ai_188544-21767.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
          },
          {
            type: "image",
            url: "https://img.freepik.com/free-photo/adult-nature-coffee-harvesting_23-2151711563.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
          },
          {
            type: "video",
            thumbnail:
              "https://img.freepik.com/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        ]}
      />
    </div>
  );
}
