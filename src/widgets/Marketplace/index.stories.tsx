import React from "react";
import CollectionItem from "./components/CollectionItem";
import { NFT_EXAMPLE } from "../../constants/images";
import NFTCard from "./Card"
        
export default {
  title: "Widgets/Marketplace",
};

export const CollectionItemBlock = () => (
  <CollectionItem data={{ name: "Passage", price: "$3,512,645", index: 1, img: NFT_EXAMPLE }} />
);

export const NFTCardBlock = () => {
    return (
        <NFTCard
          title="The Amazing Game"
          author="Rostislav Berezhnoy"
          description="Highest bid 1/20"
          picUrl="https://i.pinimg.com/originals/6f/4a/96/6f4a96c33aa496477932d717e55c990a.gif"
          avatarUrl="https://64.media.tumblr.com/4027ba285822c2e0255415eb81a54901/49f64d2b415f8d60-ed/s540x810/dc649d2b437724f9c0ba385443dff85b6238e89d.png"
          price={2500.5}
          likes={322}
          onShare={() => console.log("share NFT")}
          onFavoritesAdd={() => console.log("Add to Favorites")}
        />
    );
}