import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";

const HeaderCategories = [
  {
    name: "Men",
    subCategories: [
      { group_name: "TopWear", name: "T-Shirts" },
      { group_name: "TopWear", name: "Sweatshirts" },
      { group_name: "TopWear", name: "Formal Shirts" },
      { group_name: "TopWear", name: "Jackets" },
      { group_name: "TopWear", name: "Suits" },
      { group_name: "TopWear", name: "Casual Shirts" },
      { group_name: "Indian & Festive Wear", name: "Kurtas & Kurta Sets" },
      { group_name: "Indian & Festive Wear", name: "Sherwanis" },
      { group_name: "Indian & Festive Wear", name: "Nehru Jackets" },
      { group_name: "Indian & Festive Wear", name: "Dhotis" },
      { group_name: "Bottom Wear", name: "Jeans" },
      { group_name: "Bottom Wear", name: "Casual Trousers" },
      { group_name: "Bottom Wear", name: "Formal Trousers" },
      { group_name: "Bottom Wear", name: "Track Pants & Joggers" },
      { group_name: "Bottom Wear", name: "shorts" },
      { group_name: "Footwear", name: "Casual shoes" },
      { group_name: "Footwear", name: "Sports Shoes" },
      { group_name: "Footwear", name: "Formal Shoes" },
      { group_name: "Footwear", name: "Sneakers" },
      { group_name: "Footwear", name: "Flip Flops" },
      { group_name: "Fashion Accessories", name: "Wallets" },
      { group_name: "Fashion Accessories", name: "Belts" },
      { group_name: "Fashion Accessories", name: "Perfumes & Body Mists" },
      { group_name: "Fashion Accessories", name: "Caps & Hats" },
      { group_name: "Fashion Accessories", name: "Trimmers" },
    ],
  },
  {
    name: "Women",
    subCategories: [
      { group_name: "Indian & Fusion Wear", name: "Kurtas & Suits" },
      { group_name: "Indian & Fusion Wear", name: "Sarees" },
      { group_name: "Indian & Fusion Wear", name: "Ethnic Wear" },
      { group_name: "Indian & Fusion Wear", name: "Lehenga Cholis" },
      { group_name: "Indian & Fusion Wear", name: "Jackets" },
      { group_name: "Indian & Fusion Wear", name: "Skirts & Palazzos" },
      { group_name: "Western Wear", name: "Dresses" },
      { group_name: "Wester Wear", name: "Tops" },
      { group_name: "Western Wear", name: "Jeans" },
      { group_name: "Western Wear", name: "Co-ords" },
      { group_name: "Western Wear", name: "Shrugs" },
      { group_name: "Footwear", name: "Flats" },
      { group_name: "Footwear", name: "Casual Shoes" },
      { group_name: "Footwear", name: "Heels" },
      { group_name: "Footwear", name: "Boots" },
      { group_name: "Footwear", name: "Sports Shoes & Floaters" },
      { group_name: "Jewellery", name: "Fashion Jewellery" },
      { group_name: "Jewellery", name: "Fine Jewellery" },
      { group_name: "Jewellery", name: "Earrings" },
      { group_name: "Gadgets", name: "Smart Wearables" },
      { group_name: "Gadgets", name: "Fitness Gadgets" },
      { group_name: "Gadgets", name: "Headphones" },
      { group_name: "Gadgets", name: "Speakers" },
    ],
  },
  {
    name: "Kids",
    subCategories: [
      { group_name: "Boys Clothing", name: "T-Shirts" },
      { group_name: "Boys Clothing", name: "Shirts" },
      { group_name: "Boys Clothing", name: "Shorts" },
      { group_name: "Boys Clothing", name: "Jeans" },
      { group_name: "Boys Clothing", name: "Clothing Sets" },
      { group_name: "Girls Clothing", name: "Dresses" },
      { group_name: "Girls Clothing", name: "Tops" },
      { group_name: "Girls Clothing", name: "Party wear" },
      { group_name: "Girls Clothing", name: "T-shirts" },
      { group_name: "Girls Clothing", name: "Dungarees & Jumpsuits" },
      { group_name: "Footwear", name: "Casual Shoes" },
      { group_name: "Footwear", name: "Flipflops" },
      { group_name: "Footwear", name: "Flats" },
      { group_name: "Footwear", name: "Sandals" },
      { group_name: "Footwear", name: "Socks" },
      { group_name: "Toys & Games", name: "Learning & Development" },
      { group_name: "Toys & Games", name: "Activity Toys" },
      { group_name: "Toys & Games", name: "Soft Toys" },
      { group_name: "Toys & Games", name: "Action Figure/Play set" },
      { group_name: "Infants", name: "Bodysuits" },
      { group_name: "Infants", name: "Rompers & SleepSuits" },
      { group_name: "Infants", name: "Clothing Sets" },
      { group_name: "Infants", name: "Winter Wear" },
      { group_name: "Infants", name: "Infant Care" },
    ],
  },
  {
    name: "Home & Living",
    filterBy:"home_and_living",
    subCategories: [
      { group_name: "Bed Linen & Furnishing", name: "Bedsheets" },
      { group_name: "Bed Linen & Furnishing", name: "Bed Runners" },
      { group_name: "Bed Linen & Furnishing", name: "Sofa covers" },
      { group_name: "Bed Linen & Furnishing",name: "Blankets, Quilts & Dohars"},
      { group_name: "Flooring", name: "Floor Runners" },
      { group_name: "Bed Linen & Furnishing", name: "Bedding Sets" },
      { group_name: "Flooring", name: "Carpets" },
      { group_name: "Flooring", name: "Floor Mats & Dhurries" },
      { group_name: "Flooring", name: "Door Mats" },
      { group_name: "Home Decor", name: "Plants & Planters" },
      { group_name: "Home Decor", name: "Clocks" },
      { group_name: "Home Decor", name: "Mirrors" },
      { group_name: "Home Decor", name: "Wall Decor" },
      { group_name: "Home Decor", name: "Fountains" },
      { group_name: "Kitchen & Table", name: "Table Runners" },
      { group_name: "Kitchen & Table", name: "Dinnerware & Serveware" },
      { group_name: "Kitchen & Table", name: "Cups & Hugs" },
      { group_name: "Kitchen & Table", name: "Table Covers & Furnishings" },
      { group_name: "Kitchen & Table", name: "Bakeware & Cookware" },
    ],
  },
  {
    name: "Beauty",
    subCategories: [
      { group_name: "Makeup", name: "Lipstick" },
      { group_name: "Makeup", name: "Compact" },
      { group_name: "Makeup", name: "Nail Polish" },
      { group_name: "Makeup", name: "Mascara" },
      { group_name: "Makeup", name: "Foundation" },
      { group_name: "Haircare", name: "Shampoo" },
      { group_name: "Haircare", name: "Conditioner" },
      { group_name: "Haircare", name: "Hair Serum" },
      { group_name: "Haircare", name: "Hair Oil" },
      { group_name: "Haircare", name: "Hair Accessory" },
      { group_name: "Appliances", name: "Hair Straightner" },
      { group_name: "Appliances", name: "Hair Dryer" },
      { group_name: "Appliances", name: "Epilator" },
      { group_name: "Skincare", name: "Face Wash" },
      { group_name: "skincare", name: "Face Moisturizer" },
      { group_name: "Skincare", name: "Sunscreen" },
      { group_name: "Skincare", name: "Body Scrub" },
      { group_name: "skincare", name: "Body Lotion" },
    ],
  },
];

export default function Header() {
  const router=useRouter();

  const handleFilteredBy = (category: any) => {
    const filterValue = category.name === "Home & Living" ? "home_and_living" : category.name;  
    router.push(`/features/dashboard?filterBy=${filterValue}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "64px",
        flexGrow:1,
        backgroundColor: "white",
        alignItems: "center",
        // position: "fixed",
        // top: 0,
        // zIndex:1000,
        // boxShadow: 2,
        width:"100%",
       
      }}
    >
      <Grid container >
        <Grid size={{xs:4,lg:6}} sx ={{display:"flex",flexDirection:"row"}}>
            <Box
              component="img"
              src="https://images.indianexpress.com/2021/01/myntra.png?w=640"
              alt="Logo"
              sx={{
                height: "150px",
                width: "150px",
                object: "fill",
                cursor:"pointer"
                
              }}
            />
            <Box sx={{
              display:"flex",
              flexDirection:"row",
              marginLeft:"10px",
              gap:2,
            }}>
            {HeaderCategories?.map((Category) => (
              <Box key={Category.name}
                onClick={() => handleFilteredBy(Category)}
              sx={{
                display:"flex",
                flexDirection:"column",
                minWidth:"80px",
                alignItems:"center",
                justifyContent:"center",
                gap:1,
                padding:1

              }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    textAlign:"center",
                    fontSize: "16px",
                    cursor: "pointer",
                    "&:hover":{textDecoration:"underline"}

                  }}
                >
                  {Category.name}
                </Typography>
              </Box>
            ))}
            </Box>
        </Grid>
        <Grid size={{xs:4,lg:3}}
        sx={{display:"flex",paddingLeft:"150px",width:"100%"}}>
          <Box
          sx={{
            display:"flex",
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
            maxWidth:"300px"
          }}>
          <TextField
            variant="outlined"
            placeholder="Search for products, brands and more.."
            size="medium"
            fullWidth
            sx={{
              display: "flex",
              backgroundColor: "whitesmoke",
              borderRadius:"8px"
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          </Box>
        </Grid>
        <Grid size={{xs:4,lg:3}}
            sx={{
              display: "flex",
              flexDirection:"row",
              paddingLeft:"180px",
              cursor: "pointer",
              alignItems:"center",
              justifyContent:"right",
              gap:3
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PersonOutlineOutlinedIcon />
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                Profile
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FavoriteBorderOutlinedIcon />
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                Wishlist
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ShoppingBagOutlinedIcon />
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                Bag
              </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
