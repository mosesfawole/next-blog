import Link from "next/link";

type Props = { post: BlogPost };

const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;

  return <div>ListItem</div>;
};

export default ListItem;
