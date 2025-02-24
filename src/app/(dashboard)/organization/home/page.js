"use client";
import { Map, ProductOne } from '@/assests';
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper';
import { FLOW_SPACER } from '@/shared/constant/constant';
import InputField from '@/shared/form-control/InputField';
import SelectBox from '@/shared/form-control/select-box';
import { Box, CardMedia, Grid2, Slider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import ProductGrid, { UiCardContent } from './products/ProductGrid';

const HomePage = () => {
  const options =
    [
      { value: "frontend", label: "Frontend Developer" },
      { value: "backend", label: "Backend Developer" },
      { value: "fullstack", label: "Fullstack Developer" },
    ];

  const [value, setValue] = useState([20, 80]);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

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
        <Stack data-role="header" spacing={1} py={1}>
          <Typography variant="body1" >
            Sorted By:
          </Typography>

          <Stack spacing={2} direction={"row"} display={"flex"}>
            <SelectBox label={"Size"} options={options} size='small' />
            <SelectBox label={"Industry"} options={options} size='small' />
            <SelectBox label={"Type"} options={options} size='small' />
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
              <Grid2 container spacing={5}>
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
          <Image src={Map} style={{ width: "auto" }} alt="Map" objectFit="cover" />
        </Grid2>
      </Grid2>

    </Stack>
  )
}

export default HomePage   