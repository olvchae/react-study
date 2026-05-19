import { useQuery } from "@tanstack/react-query";
import * as s from "./styles";

function Menus() {
    const menusQuery = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            const url = "http://localhost:8080/api/db/none/util";
            const response =  await fetch(url, {
                method: "GET",
            });
            const jsonData = await response.json();
            return jsonData;
        }
    });

    const menus = menusQuery.data;
    const isLoading = menusQuery.isLoading;

    console.log(isLoading);
    console.log(menus);

  return (
    <div css={s.table}>
      <table>
          <thead>
            <tr>
                <th>ID</th>
                <th>가게ID</th>
                <th>메뉴명</th>
                <th>가격</th>
                <th>설명</th>
                <th>판매여부</th>
            </tr>
          </thead>
          <tbody>
            {
                !isLoading && menus.map(menu => (
                    <tr> 
                        <td>{menu.id}</td>
                        <td>{menu.restaurantId}</td>
                        <td>{menu.menuName}</td>
                        <td>{menu.price}</td>
                        <td>{menu.description}</td>
                        <td>{menu.available ? "O" : "X"}</td>
                    </tr>
                ))
            }
          </tbody>
      </table>
    </div>
  )
}

export default Menus