import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function TablePagination() {
  return (
    <Pagination className="justify-end text-buttonHoverText">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="bg-buttonHoverText text-white rounded-[10] tab-1 hover:bg-white">
          <PaginationLink className="bg-buttonHoverText text-white" href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="bg-buttonHoverText rounded-[10]">
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="bg-buttonHoverText text-white rounded-[10]">
          <PaginationLink className="bg-buttonHoverText text-white" href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis></PaginationEllipsis>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
