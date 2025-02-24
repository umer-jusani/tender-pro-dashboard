"use client";
import { ProductOne } from "@/assests";
import UIButton from "@/shared/pure-components/button/button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Card, CardContent, CardMedia, Divider, Grid, Stack, Typography } from "@mui/material";

const products = [
    { id: 1, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
    { id: 2, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne }, // Missing image
    { id: 3, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
];

export default function ProductGrid() {
    return (
        <Box>
            <Grid container spacing={5}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "background.default" }}>
                            <Box sx={{ position: "relative" }}>
                                {product.image ? (
                                    <CardMedia component="img" height="200" image={product.image.src} alt={product.name} sx={{ objectFit: "contain", bgcolor: "primary.light" }} loading="lazy" />
                                ) : (
                                    <Box
                                        sx={{
                                            height: 150,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            // bgcolor: "#f5f5f5",
                                        }}
                                    >
                                        <AccountCircleIcon sx={{ fontSize: 50, color: "gray" }} />
                                    </Box>
                                )}
                                <StarBorderIcon
                                    sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        color: "#1976d2",
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                            <CardContent>
                                <UiCardContent product={product} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}



export const UiCardContent = ({ product, isButton = true }) => {
    return (
        <Stack spacing={2} height={"fit-content"} flex={1} alignSelf={"center"}>
            <Typography variant="h6">
                {product.name}
            </Typography>
            <Stack direction="row" justifyContent={"space-between"}>
                <Typography variant="body2" fontWeight={"bold"} width={"min-content"}>
                    Quantity <Typography component={"span"} variant="body2">{product.quantity}</Typography>
                </Typography>
                <Divider sx={{ border: "1px solid rgba(191, 190, 232, 1)" }} />
                <Typography variant="body2" color="green" fontWeight={"bold"} width={"min-content"}>
                    Target_Price <Typography component={"span"} variant="body2" color="textPrimary">${product.targetPrice.toFixed(2)}</Typography>
                </Typography>
            </Stack>
            <Typography variant="body2" color="rgba(0, 0, 0, 1)">
                0d : 8h : 16m : 20s
            </Typography>
            {isButton && (
                <UIButton variant="contained" size="medium">
                    Submit A Bid
                </UIButton>
            )}
        </Stack>
    )
}
