import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="flex space-x-2">
      {currentPage > 1 && (
        <Button onClick={() => onPageChange(currentPage - 1)}>Anterior</Button>
      )}
      <span>{currentPage} de {totalPages}</span>
      {currentPage < totalPages && (
        <Button onClick={() => onPageChange(currentPage + 1)}>Siguiente</Button>
      )}
    </div>
  );
};

export default Pagination; 