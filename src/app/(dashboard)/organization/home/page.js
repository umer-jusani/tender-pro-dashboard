"use client";
import { Map, ProductOne } from '@/assests';
import SectionWrapper from '@/shared/common-layouts/section-wrapper/sectionWrapper';
import { FLOW_SPACER } from '@/shared/constant/constant';
import SelectBox from '@/shared/form-control/select-box';
import ModalWrapper from '@/shared/pure-components/ModalWrapper/ModalWrapper';
import { Avatar, Box, CardMedia, Grid2, Rating, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ProductGrid, { UiCardContent } from './products/ProductGrid';
import { useState } from 'react';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);


  const products = [
    { id: 1, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
    { id: 2, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
    { id: 3, name: "Gold Ring With Clear Stones", quantity: 78, targetPrice: 500, image: ProductOne },
  ];

  const companyInformation = [
    { title: "Bussiness Type", value: "Software Development" },
    { title: "Location", value: "New York" },
    { title: "Since", value: "1998" },
    { title: "Phone", value: "+00 000 000 000" },
    { title: "Email Address", value: "abc@gmail.com" },
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
          <Image src={Map} style={{ width: "100%" }} alt="Map" objectFit="contain" onClick={()=> setOpenModal(true)}/>
        </Grid2>
      </Grid2>

      {/* Modal */}
      <ModalWrapper open={openModal} showImageUploader={false} size='md' onClose={() => setOpenModal(false)}>
        <Box px={2}>
          <Stack direction="row" spacing={1} alignItems="center" mb={5}>
            <Avatar
              alt="John Smith"
              src="https://via.placeholder.com/150"
              sx={{ width: 50, height: 50 }}
            />
            <Stack>
              <Typography variant="h6" fontWeight="bold">
                Company Name
              </Typography>
              <Typography variant="caption">
                comapny@gmail.com
              </Typography>
            </Stack>
          </Stack>

          {/* Second Child */}
          <Stack direction="row" justifyContent="space-between">
            {/* Company Information */}
            <Stack spacing={2}>
              <Typography variant='h6'>Company Information</Typography>
              <Stack spacing={0.6}>
                {companyInformation.map(ele => (
                  <CompanyInfo data={ele} />
                ))}
              </Stack>
            </Stack>

            {/* Reviews */}
            <Stack spacing={2}>
              <Typography variant='h6'>Reviews</Typography>
              <Stack spacing={1} sx={{ width: "max(500px, 500px)" }}>
                {Array(2).fill(null).map(ele => (
                  <ReviewCard />
                ))}
              </Stack>
            </Stack>

          </Stack>

        </Box>
      </ModalWrapper>

    </Stack>
  )
}

export default HomePage;

const ReviewCard = () => {
  return (
    <Stack sx={{ width: "100%", padding: 2, borderRadius: 3, boxShadow: 2, flex: 1 }} spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"space-between"}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src="https://via.placeholder.com/50" alt="User Avatar" />
          <Stack>
            <Typography variant="subtitle1" fontWeight="bold">
              Rohan
            </Typography>
            <Rating value={3.5} sx={{ color: "primary.main" }} precision={0.5} readOnly size="small" />
          </Stack>
        </Stack>
        <Typography variant="body2" sx={{ marginLeft: "auto" }}>
          Oct 29, 2023
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Amazing Products.
        </Typography>
        <Typography variant="body2">
          Very nice and great products.
        </Typography>
      </Stack>
    </Stack>
  )
};

const CompanyInfo = ({ data }) => {
  const { title, value } = data;

  return (
    <Stack>
      <Typography variant='subtitle1' fontWeight={"medium"}>{title}</Typography>
      <Typography variant='body2'>{value}</Typography>
    </Stack>
  )
}