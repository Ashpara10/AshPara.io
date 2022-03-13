import { useEffect } from "react";
import useSWR from "swr";
import fetcher from "./lib/fetcher";
import { FiEye } from "react-icons/fi";

type Views = {
  views: Number;
};
type BlogSlug = {
  slug: String;
};

const ViewsManager = ({ slug }: BlogSlug) => {
  const { data }: any = useSWR(`/api/blog/${slug}`, fetcher, {
    revalidateOnFocus: false,
  });
  const views = data?.total?.views;

  useEffect(() => {
    const updateViews = () => {
      fetch(`/api/blog/${slug}`, {
        method: "POST",
      });
    };
    updateViews();
  }, [slug]);
  return (
    <span className="font-mono flex items-center justify-center gap-x-1 text-gray-900 dark:text-gray-200">
      {views?.toString()} <FiEye />
    </span>
  );
};
export default ViewsManager;
