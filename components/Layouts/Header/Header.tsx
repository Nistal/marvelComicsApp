import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import Input from "@components/Atom/Input";
import HeaderStyle from "./styles.module.scss";
import Button from "@components/Atom/Button";
import { IConttext } from "app/context/types";
import { DataContext } from "app/context/DataContext";

type THeader = {
    search?: boolean;
    };
    const Header: FC<THeader> = ({ search = true }) => {
    const { state , setState } = useContext(DataContext) as IConttext;

    const handleChange = (e: any) => {
        setState(e.target.value);
    };
    return (
        <header className={HeaderStyle.header}>
        <Image
            src={"/logoMarvel.png"}
            width={120}
            height={60}
            alt={"Logo marvel"}
        />
        {search && (
            <div className={HeaderStyle.searchContainer}>
            <Input
                value={state}
                onChange={handleChange}
                width="md"
                placeholder="Type a comic to search..."
            />
            <Button>Search</Button>
            </div>
        )}
        </header>
    );
};

export default Header;
