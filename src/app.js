import React, { useCallback, useState } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import CartModal from './components/cart-modal';

function App({ store }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const list = store.getState().list;

  const addToCart = useCallback((code) => {
    const item = list.find(item => item.code === code);
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.code === code);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.code === code
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, count: 1 }];
    });
  }, [list]);

  const removeFromCart = useCallback((code) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.code !== code));
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const itemCount = cart.reduce((total, item) => total + item.count, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls 
        onOpenCart={openCart} 
        itemCount={itemCount} 
        totalAmount={totalAmount} 
      />
      <List list={list} onAddToCart={addToCart} />
      {isCartOpen && (
        <CartModal
          cartItems={cart}
          onRemoveFromCart={removeFromCart}
          onClose={closeCart}
        />
      )}
    </PageLayout>
  );
}

export default App;
