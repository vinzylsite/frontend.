import {
  Grid, Card, CardContent, CardMedia, CardActions,
  Typography, Button
} from "@mui/material";

const items = [
  { id: 1, title: "React", desc: "UI Library",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    url: "https://react.dev" },
  { id: 2, title: "MUI", desc: "Component Library",
    img: "https://mui.com/static/logo.png",
    url: "https://mui.com" },
  { id: 3, title: "Node.js", desc: "Backend Runtime",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    url: "https://nodejs.org" },
  { id: 4, title: "Jonald Hermogneo", desc: "Jonald Hermogeno",
    img: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-1/615971860_2121120975324704_4458547976118876238_n.jpg?stp=c240.0.800.800a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGtOGPnBkiWX8JFy3NP7-dnCqUq3bRoHTUKpSrdtGgdNUxXtLuKRhazBJXjS6tE5ADpp4Y5QPhyts_wEK-XlTyE&_nc_ohc=MD7HkidY0mkQ7kNvwHT2Yfl&_nc_oc=Adn449b1EQ9B6jkp22rQULsblsKadRABPHHixti06QusWcmmxcSNZcXe0bevRCiLC3c&_nc_zt=24&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=q2Cwtch7F66ADnU9wOfcTw&_nc_ss=8&oh=00_AfxxEGUsNgC3QMCPwWJDgibxJ-UAIX09ZpIBrmpDlJZ6Bg&oe=69AC17CA",
    url: "https://www.facebook.com/jon.hermogeno676/" },
  { id: 5, title: "Rhodmar Quitlong", desc: "Rhodmar Quitlong",
    img: "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-1/601822221_1954605735466981_5041191153587708106_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHBwIEd-sfs5oOWKWcckF0pYgVVaGvGZX1iBVVoa8ZlfTIIkzY5JuWewMl78-_uTXyZZLJzsXr5Pwk4NAPyxUdJ&_nc_ohc=-Teih7A8YAQQ7kNvwG7y5pc&_nc_oc=AdmiGqmTR0HONc7gSFfmYm7jEsoiurNFiSlmCwPlYZQuZODNKuUmtg8CbdnBh8i-Q80&_nc_zt=24&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=pQ6pgc6U6C7M3o9s3MQnNQ&_nc_ss=8&oh=00_Afzod4dJiK2uZfZeKJ6XlDRZ1Ji_3xmpSoFnUIrdj_KdSg&oe=69AC221D",
    url: "https://www.facebook.com/rhodmar26" },
  { id: 6, title: "Marvin Lavarias", desc: "Marvin Lavarias  ",
    img: "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-1/504711314_1259380412855205_5383937889236185478_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHsc6wlh4wZo4KEhOUelHvkK8Ivtr0JhZ8rwi-2vQmFnzHhFwhm0Nu5UB153ho_bBR9MAMpBhA7PitYkMmMKbnM&_nc_ohc=St7TzqQPLnYQ7kNvwHQUfRa&_nc_oc=AdkBfcTMIbjV5-WXgfWMZGG9A2gO1z9VFaAfb4V_a4EUzD5XLLUkcPMDWdaTeorDx9U&_nc_zt=24&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=-ONDNOxuVMljk_FdqT8kBw&_nc_ss=8&oh=00_Afz3KuI-0WqbFK4WQDnjJKofw2bXFk9MPlbIAaygMzdBpw&oe=69ABFDA1",
    url: "https://www.facebook.com/marvzxzx" },
  { id: 7, title: "Allyssa Vinoya", desc: "Allyssa Vinoya",
    img: "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/473079792_489408037508953_2625731123248501628_n.jpg?stp=c160.0.960.960a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=8f740e&_nc_eui2=AeHO9RdMUQbm8zxzBfZ3AV48AsfXiJU5y5gCx9eIlTnLmCKcYW75bv7kbaFnhqD-n4NBeYWLtl4TGOD8cooUJFeN&_nc_ohc=7PIq3d0h9jYQ7kNvwFgIJqr&_nc_oc=AdlFdQjwE5rZ3TxsI5SR6Peqga8tygJH-RS62y9z0Ba589R9-G65TOcAGUK-kFf1yeE&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=iukZidlHJCb-betARDRdvA&_nc_ss=8&oh=00_AfxemGRCq-a8cf8ywJlm614TahIBZvnX_o8Nx-DmWxuvIA&oe=69AC2985",
    url: "https://www.facebook.com/ka.ally.2025" },
];

function Home() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to ITPE4 Full-Stack App
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        A complete React + MUI + Node.js project built from the ITPE4 documentation.
      </Typography>
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}
            key={item.id}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': { boxShadow: 8 },
              transition: 'box-shadow 0.3s'
            }}>
              <CardMedia component="img" height={180}
                image={item.img} alt={item.title}
                sx={{ objectFit: 'contain', p: 2,
                  bgcolor: '#f0f4f8' }} />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={item.url}
                  target="_blank" rel="noopener noreferrer">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home; 


