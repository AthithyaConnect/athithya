"use client";
import { useState } from "react";
import SearchBar from "@/components/cards/SearchBar";
import CategorySelector from "@/components/cards/CategorySelector";
import HostList from "@/components/list/HostList";
import PackageList from "@/components/list/PackageList";
import { hosts, packages } from "@/constants";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Sparkle } from "phosphor-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen gap-12 px-2 py-4 bg-white">
      <div className="flex items-center justify-between w-full max-w-md gap-2 mx-auto">
        <SearchBar onChange={(val) => setSearch(val)} showFilters={true} />
        <div onClick={()=>router.push("/u/ai-trip-planner")}  className="flex items-center justify-between p-3 text-white rounded-full bg-gradient-to-br from-[#7835ff] to-[#0016bc] w-fit">
          <Sparkle color="white" />
        </div>
      </div>
      <CategorySelector onSelect={(val) => setCategory(val)} />
      <HostList hosts={hosts} />
      <PackageList  packages={packages} />

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        radius="none"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Drawer Title
              </DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
