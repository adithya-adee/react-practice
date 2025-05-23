import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import type { Sculpture } from "@/types/sculpture.interface";
import { sculptureList } from "../assets/json/use-state-example";
import { toast } from "sonner";

const sculptures: Sculpture[] = sculptureList;

export default function UseStatePage() {
  const [index, setIndex] = useState<number>(0);

  const handleNextPage = () => {
    if (index < sculptures.length - 1) {
      setIndex(index + 1);
    } else {
      handleLimitError({ message: "Exceeding Index Length" });
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      handleLimitError({ message: "Can't have index below zero" });
    }
  };

  const handleLimitError = ({ message }: { message: string }) => {
    toast(message);
  };

  return (
    <div>
      <UseStateCard {...sculptures[index]} />
      <IndexPagination
        idx={index}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      ></IndexPagination>
    </div>
  );
}

export function UseStateCard(props: Sculpture) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          <strong>{props.name}</strong>
        </CardTitle>
        <CardDescription>Artist : {props.artist}</CardDescription>
      </CardHeader>
      <img src={props.url} alt={props.alt}></img>
      <CardContent>
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

interface IndexPaginationProps {
  idx: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export function IndexPagination(props: IndexPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={props.handlePrevPage} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>{props.idx}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={props.handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
