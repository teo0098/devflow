"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(query);

  const onRouteChange = useEffectEvent((url: string) => {
    router.push(url, {
      scroll: false,
    });
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        if (query === searchQuery) return;

        onRouteChange(newUrl);
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          onRouteChange(newUrl);
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, searchParams, pathname, route, query]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image src={imgSrc} width={24} height={24} alt="Search" className="cursor-pointer" />

      <Input
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default LocalSearch;
