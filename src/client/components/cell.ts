import { createElement as e, FunctionComponent, memo } from "react";
import { User } from "@app/common/types";

const Cell: FunctionComponent<User> = ({ id, value, name }) => {
  return e(
    "li",
    {
      style: { padding: 12, border: "0.5px solid rgba(22, 24, 35, 0.12)" }
    },
    `id: ${id} value: ${value} name: ${name}`
  );
};

const Cell_ = memo(Cell);

export { Cell_ as Cell };
