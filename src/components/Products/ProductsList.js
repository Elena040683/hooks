import {v4 as uuid} from 'uuid';
import {DeleteButton } from '../Widgets/RemoveItem';
import { SolidTitle } from '../Title/SolidTitle';

// Создаем компонент списка продуктов
export function ProductList({products, onDeleteProduct}) {
  return (
    <>
      <SolidTitle titleText="Product List"/>
      {/* <h2>Product List</h2> */}
      <ul>
        {products.map((product) => {
            return (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <DeleteButton onDelete={onDeleteProduct} id={product.id}/>
                {/* Рендерим компонент окна с подтверждением удаления DeleteButton
                передаем через пропс метод удаления продукта и id */}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}