import { getTags } from "@/lib/actions/tag.actions";

const TagsPage = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
  });

  console.log("DUPA", data);

  return <div>TagsPage</div>;
};

export default TagsPage;
