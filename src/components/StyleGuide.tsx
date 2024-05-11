"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import type { NextPage } from "next";
import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const StyleGuide: NextPage = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <div className="flex flex-col gap-y-4 p-24">
        {/* typography */}
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          ipsum ad iure possimus totam asperiores, consequatur enim molestiae
          corporis, optio expedita cumque vero obcaecati magnam sequi nobis
          inventore, magni quam.
        </p>
      </div>
      {/* labels and input */}
      <div className="bg-black p-24 flex flex-col gap-y-4">
        <Link href="/">Link</Link>
        <Button variant="default">Let&apos;s eat</Button>
        <Button variant="orange">Let&apos;s eat</Button>
        <Button variant="input">Let&apos;s eat</Button>
        <Button variant="orange" size="sm">
          Let&apos;s eat
        </Button>
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input type="firstName" id="firstName" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input type="lastName" id="lastName" />
        </div>
        {/* Calendar */}
        <div>
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* Select */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default StyleGuide;
