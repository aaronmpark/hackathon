import React from "react";
import { Stack, Navbar as NavbarBs } from "react-bootstrap";

export function Navbar() {
  return (
    <>
      <NavbarBs className="pt-4 pb-4" style={{ backgroundColor: "#282c4c" }}>
        <Stack
          className="justify-content-between w-100 px-5"
          style={{
            color: "#d9451e",
            fontFamily: "'Verdana', sans-serif",
            fontVariant: "small-caps",
            fontWeight: 500,
          }}
          direction="horizontal"
          gap={3}
        >
          <div className="px-4">
            <img
              src={"../imgs/hoosecure.png"}
              style={{
                width: "80px",
                objectFit: "contain",
              }}
            />
          </div>
          <h1>Hoos Secure</h1>
          <div className="px-4">GitHub</div>
        </Stack>
      </NavbarBs>
    </>
  );
}
