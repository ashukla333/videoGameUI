import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GameCard from '../common/GameCard';
import FilterComponent from './FilterComponent';
import LoadingSpinner from '../common/element/Loader';
import { createUrlParamsFunction, debounce } from '../../healperFunction';

const VideoGameList = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    score: '',
    sort: ''
  });

  const constructQueryString = () => {
    const baseQuery = {
      'pagination[page]': page,
      'pagination[pageSize]': 10,
      ...(filters.name ? { 'filters[name][$containsi]': filters.name } : {}),
      ...(filters.score ? { 'filters[score][$gte]': filters.score } : {}),
      ...(filters.sort ? { 'filters[sort]': filters.sort } : {}),
    };
    return createUrlParamsFunction(baseQuery);
  };

  const fetchGames = async () => {
    const queryString = constructQueryString();
    setLoading(true);

    try {
      const { data } = await axios.get(`https://spa.api.logicloop.io/api/games?${queryString}`);
      if (!data || !data.data || data.data.length === 0) {
        setGames([]);
      } else {
        setGames(data.data);
      }
    } catch (error) {
      console.error('Error fetching games:', error);
      setGames([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchGames = useCallback(
    debounce(() => {
      if (filters.name || filters.score || filters.sort) {
        fetchGames();
      }
    }, 2000),
    [filters]
  );

  useEffect(() => {
    fetchGames();
  }, []); 

  useEffect(() => {
    debouncedFetchGames(); 
  }, [filters, debouncedFetchGames]);

  useEffect(() => {
    return () => {
      debouncedFetchGames.cancel();
    };
  }, [debouncedFetchGames]);

  useEffect(() => {
    if (page > 1) {
      fetchGames();
    }
  }, [page]);

  const handleClearFilters = () => {
    setFilters({
      name: '',
      score: '',
      sort: ''
    });
    fetchGames();
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col w-full gap-5 lg:px-10 md:px-5 px-3 lg:flex-row">
      <div className="lg:mt-0 md:mt-32">
        <FilterComponent setFilters={setFilters} handleClearFilters={handleClearFilters} />
      </div>
      <div className="w-full lg:w-3/4 pb-20">
        {games.length > 0 ? (
          games.map((game, index) => (
            <div key={index} className="bg-gray-800 rounded mb-4">
              <GameCard data={game} />
            </div>
          ))
        ) : (
          <p className='text-white flex justify-start items-center '>No games found.</p>
        )}
        <div className="mt-4">
          <button 
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 mr-2 bg-gray-700 rounded text-white disabled:opacity-50"
          >
            Previous
          </button>
          <button 
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-700 rounded text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoGameList;
