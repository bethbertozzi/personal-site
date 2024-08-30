"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16 ">
					<div className="h-screen">
				<iframe style={{width:'100%',height:'100%'}}  src="https://docs.google.com/document/d/1hed4D2aOpMmaJ0c4grdRjGhvu3itch8SsZv1GyNYw1g/pub?embedded=true"></iframe>
				</div>
				</div>
			</div>
		</div>
	);
}
