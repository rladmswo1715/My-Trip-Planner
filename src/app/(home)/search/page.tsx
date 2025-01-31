import InnerLayout from '@/components/layout/InnerLayout';
import SearchListSection from '@/components/pages/search/ListSection';
import SearchForm from '@/components/search/SearchForm';

const Search = () => {
  return (
    <div className="flex flex-col mt-[4rem] mb-[10rem] size-full gap-[4rem]">
      <InnerLayout className="px-[14.35rem]">
        <SearchForm />
      </InnerLayout>
      <SearchListSection />
    </div>
  );
};

export default Search;
