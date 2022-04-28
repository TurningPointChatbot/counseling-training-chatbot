<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<script lang="ts">
    import {Nav, Navbar, NavItem, NavLink,NavbarToggler,Collapse,Icon,Dropdown,DropdownMenu,DropdownToggle,DropdownItem} from 'sveltestrap';
</script>

<Navbar>
    <NavbarToggler/>
    <Collapse navbar>
        <Nav navbar>
            <NavItem>
                <NavLink>Dashboard</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>Counsellors</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>Training Modules</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
    <NavItem>
    <Dropdown>
        <DropdownToggle>
        <Icon name="person-circle"/>
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>
                Administrator<br>
                <h1>Name</h1>
            </DropdownItem>
            <DropdownItem><p>Logout<Icon name="arrow-return-right"/></p></DropdownItem>
        </DropdownMenu>
    </Dropdown>
    </NavItem>
</Navbar>
<style>
    .drawer-container {
        position: relative;
        display: flex;
        height: 350px;
    }
</style>