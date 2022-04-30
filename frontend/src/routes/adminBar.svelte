<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<script lang="ts">
    import {Nav, Navbar, NavItem, NavLink,NavbarToggler,Collapse,Icon,Dropdown,DropdownMenu,DropdownToggle,DropdownItem} from 'sveltestrap';

    let isOpen = false;
</script>

<Navbar style="background-color:darkviolet">
    <NavbarToggler on:click={() => (isOpen = !isOpen)}/>
    <Dropdown>
        <DropdownToggle style="border-radius:50%">
        <Icon name="person-circle"/>
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>
                Administrator<br>
                <h1>Name</h1>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout <Icon name="arrow-return-right"/></DropdownItem>
        </DropdownMenu>
    </Dropdown>
</Navbar>
<Collapse {isOpen} style="background-color:#f8f9fa;width:20%;height:100%;padding-left:25px">
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