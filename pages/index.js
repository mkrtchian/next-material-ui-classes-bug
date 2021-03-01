import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/about");
  };
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <p>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        </p>
        <p>
          <button onClick={handleClick}>
            Go to the about page with router.push
          </button>
        </p>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
