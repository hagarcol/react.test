import { createSlice } from '@reduxjs/toolkit';
import homebtn from './../../assets/icon/home-btc.svg';
import homeeth from './../../assets/icon/home-eth.svg';
import bnb from '../../assets/Modal-Icon/bnb.svg';
import sol from '../../assets/Modal-Icon/sol.svg';
import usdc from '../../assets/Modal-Icon/usdc.svg';
import usdt from '../../assets/Modal-Icon/usdt.svg';
import linch from '../../assets/Modal-Icon/1inch.svg';
import cake from '../../assets/Modal-Icon/cake.svg';
import ftm from '../../assets/Modal-Icon/ftm.svg';
import matic from '../../assets/Modal-Icon/matic.svg';
import pepe from '../../assets/Modal-Icon/pepe.svg';
import shib from '../../assets/Modal-Icon/shib.svg';
import xmr from '../../assets/Modal-Icon/xmr.svg';

// Initial state for the slice
const initialState = {
  isModalOpen: false,
  // isReceiveModalOpen: false,
  selectedToken: null, // Initially null, default token will be set dynamically
  receiveToken: null,
  modalTarget: "send",
  searchQuery: "",
  tokenList: [
    { name: "Bitcoin", symbol: "BTC", icon: homebtn },
    { name: "Ethereum", symbol: "ETH", icon: homeeth },
    { name: "BNB Smart Chain", symbol: "BNBBSC", icon: bnb }, // Replace with actual Litecoin icon
    { name: "USD Coin(SOL)", symbol: "USDCSOL", icon: usdc }, // Replace with actual Ripple icon
    { name: "Tether USD(ERC20)", symbol: "USDT20", icon: usdt },
    { name: "PancakeSwap(BEP20)", symbol: "CAKE", icon: cake },
    { name: "Polygon(ERC20)", symbol: "MATIC", icon: matic },
    { name: "1inch(ERC20)", symbol: "1INCH", icon: linch },
    { name: "Fantom(ERC20)", symbol: "FTM", icon: ftm },
    { name: "Monero", symbol: "XMR", icon: xmr },
    { name: "SHIBA INU(ERC20)", symbol: "SHIB", icon: shib },
    { name: "Pepe(ERC20)", symbol: "PEPE", icon: pepe },
    { name: "Solana", symbol: "SOL", icon: sol },
  ]
};

// Slice definition
const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    initializeTokens(state) {
      if (state.tokenList.length > 0) {
        state.selectedToken = state.tokenList[0];
        state.receiveToken = state.tokenList[3] || null;
      }
    },
    toggleModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
      state.modalTarget = action.payload;
      state.searchQuery = "";
    },
    isModalClose(state) {
      state.isModalOpen = !state.isModalOpen;
      state.searchQuery = "";
    },
    setSelectedToken(state, action) {
      if (state.modalTarget === "send") state.selectedToken = action.payload;
      else state.receiveToken = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

// Export actions and reducer
export const {
  initializeTokens,
  toggleModal,
  isModalClose,
  setSelectedToken,
  setSearchQuery,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
