import {
  useMemo,
  useState,
  createElement as e,
  FunctionComponent
} from "react";
import { AppProps, User } from "@app/common/types";
import { useSocket } from "./hooks";
import { Cell, Provider } from "./components";
import update from "immutability-helper";

interface UserMap {
  [name: string]: User;
}

const Page: FunctionComponent<AppProps> = ({ data }) => {
  const [list, setList] = useState<UserMap>({});
  const [currentMessage, setCurrent] = useState<User>();

  useSocket(setCurrent);

  useMemo(() => {
    if (currentMessage) {
      requestAnimationFrame(() => {
        const newObj = update(list, {
          $merge: {
            [currentMessage.id]: currentMessage
          }
        });
        setList(newObj);
      });
    }
  }, [currentMessage]);

  const sortedMap = useMemo(
    () =>
      Object.keys(list).sort((l: string, r: string): number => {
        return (
          Number(l.substr(0, l.indexOf("-"))) -
          Number(r.substr(0, r.indexOf("-")))
        );
      }),
    [list]
  );

  console.log(sortedMap.length);

  return e(
    "ul",
    { style: { margin: 0, padding: 0 } },
    useMemo(
      () =>
        sortedMap.map(item =>
          e(Cell, {
            ...list[item],
            key: `${list[item].value}${list[item].name}${list[item].id}`
          })
        ),
      [sortedMap]
    )
  );
};

const App: FunctionComponent<AppProps> = props => e(Provider, props, Page);

export default App;
