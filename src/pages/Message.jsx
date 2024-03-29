import { Container, Box, TextField, Card, CardHeader } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Footer from './Footer';
import Sidebar from './Sidebar';

import Grid from '@mui/material/Unstable_Grid2';
function Message () {

    const handleClick = () => {
        alert('You clicked the Chip.');
    };
    
    return (
        <>
            <Container component='main' maxWidth='xl' sx={{marginTop: 0, padding: 0}} >
                <Box >
                <Grid container spacing={2}>
                    <Grid  xs={12} md={3}>
                        <Sidebar></Sidebar>
                    </Grid>

                    <Grid xs={12} md={6}>
                    <TextField fullWidth size="small" label="Search" ></TextField>
                    <Stack direction="row" spacing={1} sx={{display:"flex", justifyContent: 'space-evenly', marginTop: 1}}>
                        <Chip label="Messages" onClick={handleClick} />
                        <Chip label="Channel" variant="outlined" onClick={handleClick} />
                        <Chip label="Request" variant="outlined" onClick={handleClick} />
                    </Stack>

                    <hr />

                    <Card sx={{ maxWidth: '100%', marginBottom:1 }}>
                    <CardHeader
                        avatar={<Avatar src="https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"></Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Jeff Bezos"
                        subheader="Let's explore a partnership?"
                    />
                    </Card>

                    <Card sx={{ maxWidth: '100%', marginBottom:1 }}>
                    <CardHeader
                        avatar={<Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaGhgaGhwaGBoaGhkeGhoaGhocGBocIS4lHCErIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjEhISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxMTQ0NP/AABEIAPkAywMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABBEAABAwIDBQYEAwUHBAMAAAABAAIRAyEEEjEFQVFhcQYTIoGRoTKxwfBCUuEHFHLR8SM0YpKio7J0goOzFRZT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQEBAAMBAAIDAQAAAAAAAAECEQMhMRIyQSJRYRP/2gAMAwEAAhEDEQA/APKWorUJqK1Wg8BIQlBXFAMchPRUIhAAcmlPeEwpKIlSJUB0Lly5AcFy4LggOSJS1cUAiUJFyAexSqKitUqkiFXVEFyO5AcmIGUiUpqRkK5ckhAS2orUJuqK1MHrly5CTENyKUJyAC5DKI5DchREoXKTSwZIl0tH8J+cJWnJ1FJXEngrT/42AXtOZgNyRpYkZhuBg348CQFIoYHMQIAsSPIgEe4I5TwU/pUyp2kkaW+qa4GJ0HzWmZgWCbD4fWCAY6mLqLiME0MuAS8jLyjeOun9Eu0flRmoS28749pn2SgC19w9xP6KQ+kQC0aZgfOI+pQxS8OiP0OAkJE5wSK5UnNKk0VFYpNJETT3IDlJeozkUQMppTiE0oN0JEqRASmorUAIzUwKAmlKFxQkxDIRAE0oOAlBe71RargNVGbcyUrVRKo0jlzWHCdfIKS3ajgLhpvGn0O5RquIOUNEgaaC469Vb7F7NvqQ58tadBvI+izt57q8y31EDD4p8vDAQ2oHNc0SRDotfgQCOYHBTsOyq3QSePUQVv8AZfZ+iwfAPvir2ls2npkG/dxWf/pG08NeXU+/8IcCAG5dDpJdPP4ifJFeDPiaQBEGNbwvVmbMp7mDSPYj5EplXYNN/wCEWB9xCc2d8TyoYRpIboS756a66J78ExzTlPE31mTaOkL0nEdk6TgbCfdUeK7Fubem7QzfQXBM8dE5qIuNPPquzrGN39VAxOFLRMfe/wCnutbisC+g4tewlstv0ABlRhSZVblAG4njdtx6h1+QVT/jPU/2yQ0mNNVJo3I4/VHo4WHjMYGYNPO8W8wUtPClvsJ4aQfX5Kup/PYG9AcpmJBL3EDeSRwm5ngoblaQikSuTSkCLly5ASWorUFpRWlMCrkiUISaE0tTig4mpDY4pU4i1HZncArShh2wMsA21Ekzpc6eQ3qpYRvV9salLg4yTuEWj6KLeNMzq02XsWCH1DnOoB0AGn9Ny12DYoGHY7U71a4RpnkufWra7PFmSLXCU9wVhTYo2FCsWcFEjW09rUYkpGMlHLFfEWgRZMc6FKaxI5gS4fVdVptcIc0HqOK867VdnjRmrR+CRmaPwzbMI3adLL0yqy6iPpB0giQRBBEgg623p51ZUbzNR43We17hmMZRzmB8IjcOU+atcK1tTK3LDKZzuMDM8iIaTzNgOc6AlO2zsMUajmy0CZaXEhpBO+JKDhqjWmJD3DTL4GNtc+MZnH/t6zot57cl9IO1qRYzICDJmodJdJOUX0HDjxhpWdctDtV7Q0AmXXI1yiSJsQS8mI3AQNTpnnLSfEa+huTSnFNKCIuhcuQEhqI1DCe1MDBKSkalQkg1UTG7lL3qPi6cieH2UqcRKbZIW07OYaYAG8an7lZPZ9Ave1o3r0bZWGawADz6rLdb+OLhmH03qXTZB+SZSKO97Rq4A9Vhx1xPw0eisaDDKhYBrTcEHoZ+yrRogKpk7RmNCcXfNIG2TMtlSOdGpp5TWNhLKSaBUYLqvqsvKtFErMBU6is1k+0TB8ZvHQTw13Lz3F42TDQWm8R4p4ZZ+HTT+g9K7ReFhMAi8jlv9l5ZtCg0VCWzF7WP4vnC1xfTDc9oWIaSM2pOpkk+drepUJyvcVXHd5YDfCBFyTB5mxsNLW3Kjctow19CcmlOKaUERKuXIA7UQITUQJgZqVNaUpQkkpjxYpxTKhsUBI7OD+1HIGOui3tE2CwXZwf2o6Fb6g2cvmVhr66/H/E2pinudkBLQPxc+sJo2fWf4WuJnW5Jj+J0ncuxL8txxSN7UCk0uawvywSb7zAm9ptv8kuNO+vYuG2djKJBbMDWFqNl7aLxD7PVfsrtmarXuFINDAxz5hzAHjM0l7HOc0RMkshuji1Rtu46m8h7GmnU/E0xe0yCLOHMEos4eb342zcRIEHVPNWABzVP2Yq94wE6hWO1QWCVMq7z4THbdp0RLj5Sqb/7qxxhtNztNcjZ43c8D70QcQaMjvXAk6DU+TQCSiM2Vgqlg1uaPxNc0+joT71FnFjgduB8ZsrZ0GaTylWeb3WardnKTJImeMkx9VO2Y9wBYSSBBE6gcOaVhh7dwxfSfHxAGPReK46sQ862PHhp5jToAvc6xm/393XiXaFgFR5H53D5EfVPDLymYquSMs7gSBpMRb2Vc9EYSRJQ3Loct+hFNKcUhCARKkhdKAM1EahtTwmBmpU1qdKEmFT9mYBlVr8zoOUBkmJdqepgG3VQCrjs1QZVe+i+wfTL2neH0/ECD/CXpa+el452dRdlYcsrQdw9jF1u9nCckRMXWXq0sld86lojmJMHlIgxulavZBGUTZc+3V44JU2Q57jlECJjWSgYHY7Bmp1GMgm8yxxG4zoSBoVpsKLzoVPpwbwCegKM3jX8/wDEPYGBo4Zru6a3xxmkufMaCTuFzGlyqHaezqTA4MJ1OUbmXMtbf4RK2FajDJ04R+iym2Hhthpf15o1q085kl56WHZF2UHgFoNo0w/wuJAgmRqsr2SJJcSbWstSXgvhTyxdz6ZPEbBD31ASXAscG8ASCA51/FEjkOCpNgdjqoql1VgaxrMoLHQ55IcGuGR5IdeS4gDwtEar0LEbNgy3TWJgg8iiYem/TNPUCfUa+i1zeMd5lvWW2ZiK7D3NUFwEhr7XA+E5QbAiZG4jSDa9oUpgzCnP2cwiIvrO+RoidyGhZ30rsvxV4kwPKV4z2gFydJqO5+vS3qvYdr1IY88Gn6ry9+w6uKfTZTDMzg8y52Vti43In8p9QjFZeWW+ozbdEJ4UipScxzmPBa5jnNc06hzSWuBjgQQo9RdTkCTSnlMKQIuXFcgChECGERpTAjU5NanoSaVZdmAf3qiBvc4eRY8H2JVYVP2Fi20sTSe74WuM8szXNnyLgUtfKrP8o1/bXCtZVplogupknyOv3wRdnvho6Sm9raoqd1UbcEPAcDIcGxdvK/ukwbYaDvgLm07cfa0Oz8Ra/JXtCTcevzWPw9RzTbfPSy0zMQQ0N4i5U/HRL2D4rETvsPv76rGbbq5nOgw0C/Por/EPvfyWO2phXVA5pc5hLpDm7xuFt38k8+6ep69Nf2PezIY1V5VeM8tMxr9V5vsTF1mOa2C5wMSGnK4fmsLHiFptn1cSMQ99QNFB0ZABcWvO/wAzrujRVfhTtbSnUBFrp2WOCrsMCyD+F3tyVkLhKVGs8cDxKDWeISV3hQXGbk2HHRLVH5jP9p6x7t+W5MAcbuAgc7oNDZeIZRpMpPFN7i1pIDXEtLrjMZLRJJmx8PNA27ncIaJBe0HlclseYWrrYgU6BqvBAp0n1Dx8Dc1uZPzRn5xN9f5f6eHbYxgrYmtVGj6j3DdLZhpI4kAE8yVW1RdPw4sAmVV1vPv0EppT3JiQIVy4hKgCAojUMIjUwc1EQ2oqAa4pl92u7ruTymOQHoG26OV9NguB3mnH+zmBu1Ck4anYDkszsjaT6uVj4Pdg5TeTniZ/yC609B8ei5dzl47PHZfcEBghanCU2OYJN+I16KgDAT981Z4V+QQ6BAnzhTPfpt3ns7GYYF5bJMAfooz9nAkAAa3m6ocf2la17g053k2a25txjRBfjcfUbmpsdB/I5o8ruzFXJw89039DAsbkDdxv5iFPNEDcJ6Lz3Dbbx7GQ6jUc4Hg13PjpCtNmdtTmDMTSfTnQuYWHnZ2o6I4u51PjZOZIhNouIEbwnYasxwDmkEESCLi6Srr6qbOM/wBd9IlV8mPNArttdEdYnfvKHi3eHzWdqlbQwhqDLeM7SbflBt/q9lV/tX2p3eGbRaYNVwY7jlZD3D/N3XkSFpdn0HOp/EWg3JFtCRI9F4j2n2ycVXLxIpt8FJpJJDQSZJNy5xJcTxdyW3jz29YeffM/lBoJlZPoaJlddLiBKYU8ppSoNK5dK5AFTwmAJzUweEZCCIEAhCYUUiyFKErHYNSKh5j5Fa+nWEffmsBQq5HB3Ba7C4oOAIgzCw8mffXV4deuNFgMRJg/1Wg2q1jqeWA6RccP5lYpji0g9FoMC8uFz6rKuie1HjcGCPA0GN2h6KfsTHZG5ADI3FTqeEzvVszAMFw0GbSqzo5dT4rqW2Xhwz0i1p/EIIP1FvmpL3tqgtIDmu1aWAg9QbK7w+EZEZR6KQ/ANiWAAjSyd1Yqb1PrPYTZD8OJoPeGTJpv8bOeQnxNPmRyWhwzswzHXmo9Go6S02cOOh6Jr8WWSD7KP11Ng9SLqHjHW+9fuUoq7zvuq/auMFOk95PwtcR13DzNlPO0+8jIbc7ehlCph6TXNq+KmHWDWtzFrnAzJJEx1B3LzVqdWdJ1mw/X3lMaV15zJPTg3q6val0ElYJaBS1laEZyYU9yYUgQrly6UAROakCUJgUBFYhNRWoDiEIhFKYhIb1Nw1V9E5XAizTlOoDmh7TG6Q4GOadsTZ/7xiaND/8ASoxruTJl58mhxWx7T4RmJxVcjwnO0AiIGWnTERwEC3GVGvjXH1WYbH5mi6sMJj9J4g35GQs27BVKJ8Qsd4uD981LpPusvzK3mrG4wOPDnTvVzQxrD4dI+7LzyjiHN+/dTWbYLTLpHN1vNH540nkejUMT4o1U9mIC88Z2iGW5vxBsFJpdphuM23cUcO7jbVajYBIvCr3ua/y97rNYnbLiJUYbUebMlTcFNxo8Vig232V59217QNeHUGHQS87idzBxsZPQb5Wp2Zsx9ZzQ8k5924D8TncQBJ9l5/2/pgY7FFogd86w3WbPvKvx4/usvL5PXIzJXBcuC2cyTh0WrohUCiVUyR3IZT3JjkjNK5KkQBk5qa1OaEwI1FYEFqKxAOcmJz3gakKLVqzYaIDYfsupB+Pzfko1nN6lopz/ALhUjZLsz67ifjr1XjzeR9FF/ZVWy49o/PTqN9cpH/EKzw2DdSq1KbhDmvqCP/I8tNtxBaRyIUbvpp4p3SyfhswNlV1tlN3WO4/otFh2SISVaHJQ2sZJ1B7DBbI4jRHa4hXtSnfryTaWBa/fbejokVNMM/I0nm0HT71UzC4cuuGQByhW+G2E0b5njefNXNDZ0QABCXaORn8Ns7Mbjf5K6pYJjGzHADeSSYDQN5JIAA1JCsXUm025nmBuAEuceDRvKtti7LOYV6rYcAe7ZqKYNiTuNQixO4EgauLidt4erMzomzMAKLAXAB7oLiY8LRfLPAalfOW3cR3tSrW3VKlSoOMPe549ivfO3+1O5wVd0w57e5Zxmp4SR0aXHyXz7i9IW0nI5Le3qsDTMJ/dxqWjlMn0EorWSIGu7+SY6lzQHMqtHH0/VSWZHD42tdweHDp4mgj1hRG051Kd3Q4oHDqtIt4EcQQ4erSQguRWsHNKaIO/2QAE1STheDgm/uzuHuP5oAYf1S97CBddCBwf954BMdVcd6ZCWEHxwCelhcAgNB2MrZMXTdvAcR5DMfYOXq3abZ2YsxbAcpDWVI0H5HHzOU9WcF492edGJo835f8AOCwe5XvPZXFtLDSeA5rgWkG4INiCOCLn9ZsLOvzqVSYajIsnvpgmFOx+Bfh3FoGYfhJ/E0m08xoenMJmHcxxymzjuP04rKTnp2yTU7FVVpxuRME0SjYymWmDpuUdlQNMxMc/nxCVH5XtJgaEN2PuGsGZxsN4nkBqq396fUIY0akANbaSdJWuwmye4ZLQHPIGZ3CSJDLWHPU+kOS2+ka1Mz39M2NsY5u9rHM8aAmcvpYHkNOqvajtyq8Lma9pmQ6zvPT3j1VkTYk6C58lpMzLm1q6va8j/a5tHNVp4cGzGl7v4n2H+ke68yriSr3tLje+xNapM5qjo6DwjyMT5qkeFVTAmMTMQyHTxCktGibiact5j7KDRBC57p0SAJWNSDguKUiE0lAPaU6U2mnICE1hSmkVItoldZBopYnCmQJRqIDnX8hxUzurb0yVhCVoR61CLjRBJhIJuzamWtSd+WpTd6PaV7TggWPLRqHQPWF4fg2Fz2tH4nsHmXAfVe+1fBVfUicge/qWzkHm8sHmqz/ab9X2Jc2qO7cCcpjM0gOBFjEgiN19YngouI2I3L4XF3APi53Q5oEem7UKFsDG+CHg5tLyM8C+Uxc6+iu218wNoFo48z98ErmNM71n5WGx9R7DHiMGC1wuCNQhUXZxz+/NanbGDa4CpbMIa/8AxCwa7mRp0jgqd4a1Yan5vK7ca/eeyJnZHCTiA534GucBz+H5OK3VRsgjksn2aqNbUJLg2WwAbZiSDYnhGnNa9Xn45fL/ACZnG43IzvHSGtg6EucZENa3Ukm3mpXazHdzgq1QG4YcvV1m+5Cj42iKmIy6spmY/wAbmgn/ACtP+4eCy37T8c5mC7pws+swMP8AhAc8tP8ACWAdCOC2vvlZPH3vg+3onESJCCSnMcRdT0CNCcQmuqtA5/eqjuquPL746n2QDX04P6eqabJS4/eiY9xP6BAK4DKXdAEAFFxT9G8Lnz09vmgtSA7V0rmpciAFiDBC6bLsZuTWFAdkB3XRab3t0MjgfoU4EJqAM6vaYvwUR7iTJ1RXNsgOQFr2epZq9IRM1aUcZztgDmV9F4fBMIId4gXS+NHETDRxAkzxPRfPfZX+8UOAr0CeneslfS2Ru6wThVFfs9gYG5Q5kAAETYaT/NRxQyHwgubwLiS3pJuOWvXQWbXxv8kOvTLYMWO7gq6aM5kggtMEX8OoVTidgTdji3k4SOgIuOt1oG6JGu80tZl+nnes/KwmOY5jHsc0khrgW67tOYM+603Y/EPbgabqpOhLJu4sJPd/6YjlCPX2G2pUNSoTlytBaLAkTJLtTbKLR8OplSnUszpNmN0G5Z5zytN+T9SOwVCznO+JxLjyzGY8rDyXmf7ZMV/dqQ41Xn/QxvzevVqrsrC48LDnuXhf7VK5OMa0n4aLJ6ue9/8AxcxadZMc0LnhObpr5Xt1+9yY4pAxyYSnuXBsXKAHmRmAQXEmAkpQTom498ANHU/f3ogIbnSSeKfTQ1IoMSMUNRYXZE/MmSBiwkw40TsXqkw+iRjQFy4b/vgkCCKVHqNUpv0UeogLTs8+KtMnQVGE+T2n6L6JoYrx5H6EwvnLY/xN6t+a9+xvx+Z+arJVqm5RYQFHxdVptOijnUdFDq/EeqXD6saNMu5AKa2mBoEDZ3w+ZUtTaOBVQNFHaJdA0CPV1QsLqU58Ko21amjR1/l9V8/9vK+faGJOsPDNdO7YymR6sK962h8Z8vkF879ov75iv+oxP/uen/RoJEJhKWomVEA0u3phfxSOXJBIokazpdQq75cSph+E9Poq96YcxWuEoWVZR1V9h9AlBQ6zYUfMj4j79lGTof/Z" >P</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Elon Musk"
                        subheader="Interested in business collaboration?"
                    />
                    </Card>

                    <Card sx={{ maxWidth: '100%', marginBottom:1 }}>
                    <CardHeader
                        avatar={<Avatar src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTATgQfiBMO4H8n-6ZYYw8bzocBjQ2miUgdp05o3YwO21DeKDGd" >P</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Bill Gates"
                        subheader="Partner with me? Great potential."
                    />
                    </Card>
                    
                    <Card sx={{ maxWidth: '100%', marginBottom:1 }}>
                    <CardHeader
                        avatar={<Avatar src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds" >P</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Mark Zukerberg"
                        subheader="Business synergy. Let's discuss?"
                    />
                    </Card>

                    <Card sx={{ maxWidth: '100%', marginBottom:1 }}>
                    <CardHeader
                        avatar={<Avatar src="data:image/webp;base64,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"  >P</Avatar>}
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Warren Buffett"
                        subheader="Inspired by your work. Partner?"
                    />
                    </Card>
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Footer></Footer>
                    </Grid>
                </Grid>
                </Box>

            </Container>
            
        </>
    )
}

export default Message