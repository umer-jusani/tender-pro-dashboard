"use client";
//home
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
//employees
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
//certificates
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
//applicants
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
//transaction
//posted-jobs
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// portfolio
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


let sideBarRoutes = {
    organization: [
        {
            id: 0,
            title: "Home",
            href: "/organization/home",
            icon: {
                filled: <HomeIcon />,
                outline: <AddHomeOutlinedIcon />
            },
        },

        {
            id: 1,
            title: "Dashboard",
            href: "/organization/dashboard",
            icon: {
                filled: <Diversity3OutlinedIcon />,
                outline: <PeopleOutlineIcon />
            }
        },
        {
            id: 2,
            title: "Chats",
            href: "/organization/chats",
            icon: {
                filled: <SchoolIcon />,
                outline: <SchoolOutlinedIcon />
            }
        },
        {
            id: 3,
            title: "My Favorites",
            href: "/organization/my-favorites",
            icon: {
                filled: <BusinessCenterIcon />,
                outline: <BusinessCenterOutlinedIcon />
            }
        },
        {
            id: 4,
            title: "Library",
            href: "/organization/library",
            icon: {
                filled: <PersonRoundedIcon />,
                outline: <PersonOutlineOutlinedIcon />
            }
        },
        {
            id: 5,
            title: "Transaction",
            href: "/organization/transaction",
            icon: {
                filled: <Diversity3OutlinedIcon />,
                outline: <PeopleOutlineIcon />
            }
        },
        
    ],
    technicians: [
        {
            id: 0,
            title: "Home",
            href: "/technicians/home",
            icon: {
                filled: <HomeIcon />,
                outline: <AddHomeOutlinedIcon />
            }
        },
        {
            id: 1,
            title: "Portfolio",
            href: "/technicians/portfolio",
            icon: {
                filled: <DescriptionIcon />,
                outline: <DescriptionOutlinedIcon />
            }
        },
        {
            id: 2,
            title: "Certificates",
            href: "/technicians/certificates",
            icon: {
                filled: <HomeIcon />,
                outline: <AddHomeOutlinedIcon />
            }
        },
        {
            id: 3,
            title: "Jobs",
            href: "/technicians/jobs",
            icon: {
                filled: <HomeIcon />,
                outline: <AddHomeOutlinedIcon />
            }
        },
        {
            id: 4,
            title: "Transaction",
            href: "/technicians/transaction",
            icon: {
                filled: <Diversity3OutlinedIcon />,
                outline: <PeopleOutlineIcon />
            }
        }
    ]
};


export { sideBarRoutes };
