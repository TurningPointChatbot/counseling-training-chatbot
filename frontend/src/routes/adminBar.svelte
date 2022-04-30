<script lang="ts">
    import {Nav, Navbar, NavItem, NavLink,NavbarToggler,Collapse,Icon,Dropdown,DropdownMenu,DropdownToggle,DropdownItem} from 'sveltestrap';

    let isOpen = false;
</script>

<Navbar style="background-color:darkviolet">
    <NavbarToggler on:click={() => (isOpen = !isOpen)} class="me-2"/>
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