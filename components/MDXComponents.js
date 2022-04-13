import Image from "next/image";

import { IconLabel } from "./icons";
import { Dropdown, DropdownItem } from "./Dropdown";
import { Summary } from "./Summary";
import { CustomLink } from "./CustomLink";
import { CustomImage } from "./CustomImage";

export const MDXComponents = {
  a: CustomLink,
  hr: () => <hr className="my-8 border-b-2 border-gray-200" />,
  h1: (props) => <h1 className="m-8 font-bold text-3xl" {...props} />,
  h2: (props) => <h2 className="m-6 font-bold text-2xl" {...props} />,
  h3: (props) => <h3 className="m-4 font-bold text-xl" {...props} />,
  h4: (props) => <h4 className="m-2 font-bold text-lg" {...props} />,
  h5: (props) => <h5 className="m-2 font-bold text-md" {...props} />,
  h6: (props) => <h6 className="m-2 font-bold text-sm" {...props} />,
  p: (props) => <p className="xl my-8 mx-4" {...props} />,
  table: (props) => <table className="table striped"{...props} />,
  thead: (props) => <thead {...props} />,
  tbody: (props) => <tbody {...props} />,
  th: (props) => <th {...props} />,
  tr: (props) => <tr {...props} />,
  td: (props) => <td {...props} />,
  img: (props) => <CustomImage {...props} />,
  ul: (props) => <ul className="list-none" {...props} />,
  ol: (props) => <ol className="list-none" {...props} />,
  li: (props) => (
    <li >
      <IconLabel className="text-amber-900" />
      {props.children}
    </li>
  ),
  Image,
  Summary,
  Heading: (props) => <h1 {...props} />,
  Dropdown,
  DropdownItem,
};