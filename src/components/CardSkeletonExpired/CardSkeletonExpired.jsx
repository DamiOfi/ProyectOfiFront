import React from 'react';
import { ContainerCardSkeletonExpired } from './cardSkeletonExpired.styled';

const CardSkeletonExpired = () => {
  return (
    <ContainerCardSkeletonExpired>
        <div className="bg-neutral-300 w-full flex h-auto py-2 px-4 items-center justify-between gap-y-2 rounded-2xl">
                <div className="bg-neutral-400/50 h-8 w-10 animate-pulse rounded-md" />
                <div className="bg-neutral-400/50 h-8 w-28 animate-pulse rounded-md" />
                <div className="bg-neutral-400/50 h-8 w-24 animate-pulse rounded-md" />
            <div className="flex items-center justify-between gap-x-1">
                <div className="bg-neutral-400/50 h-8 w-12 animate-pulse rounded-md" />
                <div className="bg-neutral-400/50 h-8 w-12 animate-pulse rounded-md" />
                <div className="bg-neutral-400/50 h-8 w-12 animate-pulse rounded-md" />
            </div>
        </div>
    </ContainerCardSkeletonExpired>
  );
}

export default CardSkeletonExpired;