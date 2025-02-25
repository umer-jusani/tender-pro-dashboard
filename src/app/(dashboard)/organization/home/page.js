"use client";
import { Map, ProductOne } from '@/assests';
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper';
import { FLOW_SPACER } from '@/shared/constant/constant';
import SelectBox from '@/shared/form-control/select-box';
import { Box, CardMedia, Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ProductGrid, { UiCardContent } from './products/ProductGrid';

const HomePage = () => {
  const options =
    [
      { value: "frontend", label: "Frontend Developer" },
      { value: "backend", label: "Backend Developer" },
      { value: "fullstack", label: "Fullstack Developer" },
    ];

  const products = [
    { id: 1, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
    { id: 2, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
    { id: 3, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
  ];


  return (
    <Stack spacing={FLOW_SPACER}>
      {/* Heading */}
      <Typography variant='h4' fontWeight={"bold"}>Find Your Next Deal</Typography>

      {/* Soring */}
      <SectionWrapper>
        <Stack data-role="header" spacing={2.5} py={2}>
          <Typography variant="body1" fontWeight="medium">
            Sorted By:
          </Typography>

          <Stack spacing={2} direction={"row"} display={"flex"}>
            <SelectBox
              fullWidth
              size="small"
              name="Industry"
              label="Industry"
              // initValue={source}
              // value={source}
              // handleChange={(e) => setSource(e.target.value)}
              items={[
                { label: "All", value: "all" },
                { label: "Outsource", value: "outSource" },
                { label: "In-House", value: "inHouse" },
              ]}
            />
            <SelectBox
              fullWidth
              size="small"
              name="Size"
              label="Size"
              items={[
                { label: "All", value: "all" },
                { label: "Outsource", value: "outSource" },
                { label: "In-House", value: "inHouse" },
              ]}
            />
            <SelectBox
              fullWidth
              size="small"
              name="Type"
              label="Type"
              items={[
                { label: "All", value: "all" },
                { label: "Outsource", value: "outSource" },
                { label: "In-House", value: "inHouse" },
              ]}
            />
          </Stack>
        </Stack>

        <Box data-role="content" bgcolor={"background.default"}>
          <ProductGrid />
        </Box>
      </SectionWrapper>


      {/* Tenders */}
      <Grid2 container spacing={4}  >
        <Grid2 item size={6} >
          <SectionWrapper>
            <Stack data-role="header">
              <Typography variant='h5' fontWeight={"bold"} >My Tenders</Typography>
            </Stack>

            <Box data-role="content">
              <Grid2 container spacing={{ md: 5, sm: 3 }}>
                {products.map((product) => (
                  <Grid2 item size={12} key={product.id}>
                    <Stack direction={"row"} spacing={2}>
                      <CardMedia component="img" image={product.image.src} alt={product.name} sx={{ objectFit: "contain", bgcolor: "primary.light", maxWidth: 200 }} loading="lazy" />
                      <UiCardContent product={product} isButton={false} />
                    </Stack>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </SectionWrapper>
        </Grid2>

        <Grid2 item size={6}>
          <Image src={Map} style={{ width: "100%" }} alt="Map" objectFit="contain" />
        </Grid2>
      </Grid2>

    </Stack>
  )
}

export default HomePage   