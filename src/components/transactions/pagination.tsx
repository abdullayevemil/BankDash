import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (page: number) => void;
}

export function TablePagination({ currentPage, setCurrentPage, pagesCount }: Props) {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination className="justify-end text-buttonHoverText">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="hover:cursor-pointer"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          />
        </PaginationItem>
        {Array.from({ length: pagesCount }, (_, index) => (
          <PaginationItem
            key={index}
            className={`rounded-lg ${
              currentPage === index + 1 ? "bg-buttonHoverText text-white" : ""
            }`}
          >
            <PaginationLink
              className="bg-buttonHoverText text-white hover:cursor-pointer"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationEllipsis></PaginationEllipsis>

        <PaginationItem>
          <PaginationNext className="hover:cursor-pointer"
            onClick={() => currentPage < pagesCount ? handlePageChange(currentPage + 1) : null}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
