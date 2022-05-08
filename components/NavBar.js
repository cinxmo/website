import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { violet, blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';

const StyledMenu = styled(NavigationMenu.Root, {
  fontFamily: 'Verdana',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100vw',
  zIndex: 1,
});

const StyledList = styled(NavigationMenu.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  width: '100vw'
});

const StyledLink = styled(NavigationMenu.Link, {
  textDecoration: 'none'
});

const StyledItem = styled(NavigationMenu.Item, {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: violet.violet11,
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${violet.violet7}` },
  '&:hover': { backgroundColor: violet.violet3 },
});

const MenuLink = (href, text) => (
    <StyledItem>
      <Link href={href}>
        <StyledLink> {text} </StyledLink>
      </Link>
    </StyledItem>
)

const allLinks = {
  '/': 'Home',
  '/learn': 'Learn',
  '/posts': 'Blog',
  '/contact': 'Contact',
}
Object.freeze(allLinks);

const NavBar = () => {
  return (
    <StyledMenu orientation='horizontal'>
      <StyledList>
        {
          Object.keys(allLinks).map((link) => {
            return MenuLink(link, allLinks[link]);
          })
        }
      </StyledList>
    </StyledMenu>
  )
}

export default NavBar;
