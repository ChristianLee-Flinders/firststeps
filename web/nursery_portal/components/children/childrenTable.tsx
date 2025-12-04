'use client'

import { dummyChildren } from "@/lib/dummyData/children"
import { DataTable } from "../ui/dataTable"
import { getChildrenColumns } from "./columns"
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, LayoutGrid, List, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import React from "react";


type ChildrenTableProps = {
    onSelectionChange?: (selectedIds: string[]) => void
}

export default function ChildrenTable({ onSelectionChange }: ChildrenTableProps) {
    // State
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState('list');

    // Filtering
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [roomFilter, setRoomFilter] = useState('all');

    // Filtered Children
    const filteredChildren = dummyChildren.filter(child => {
        const matchesSearch = !search || 
        `${child.first_name} ${child.last_name}`.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'all' || child.status === statusFilter;
        const matchesRoom = roomFilter === 'all' || child.room === roomFilter;
        return matchesSearch && matchesStatus && matchesRoom;
    });

    // Pagination
    const ITEMS_PER_PAGE = 10;
    const totalPages = Math.ceil(filteredChildren.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedChildren = filteredChildren.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Reset to page 1 when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [search, statusFilter, roomFilter]);

    const toggleSelectAll = () => {
        const all = filteredChildren.map(c => c.id)
        const next = selectedIds.length === filteredChildren.length ? [] : all
        setSelectedIds(next)
        onSelectionChange?.(next)
    }

    const toggleRowSelection = (id: string) => {
        setSelectedIds(prev => {
            const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
            onSelectionChange?.(next)
            return next
        })
    }

    const columns = useMemo(
        () => getChildrenColumns({ selectedIds, filteredChildren, toggleSelectAll, toggleRowSelection }),
        [selectedIds, filteredChildren]
    )

    const rooms = [...new Set(filteredChildren.map(c => c.room).filter(Boolean))];
    const selectedChildren = filteredChildren.filter(c => selectedIds.includes(c.id));


    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 rounded-xl bg-white"
                />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 rounded-xl bg-white">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="waitlist">Waitlist</SelectItem>
                </SelectContent>
                </Select>
                <Select value={roomFilter} onValueChange={setRoomFilter}>
                <SelectTrigger className="w-40 rounded-xl bg-white">
                    <SelectValue placeholder="Room" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Rooms</SelectItem>
                    {rooms.map(room => (
                    <SelectItem key={room} value={room}>{room}</SelectItem>
                    ))}
                </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1 w-fit">
                    <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        className={`rounded-lg ${viewMode === 'list' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}`}
                        onClick={() => setViewMode('list')}
                    >
                        <List className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={viewMode === 'cards' ? 'default' : 'ghost'}
                        size="sm"
                        className={`rounded-lg ${viewMode === 'cards' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}`}
                        onClick={() => setViewMode('cards')}
                    >
                        <LayoutGrid className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            
            {/* List View */}
            <DataTable 
                columns={columns} 
                data={paginatedChildren} 
            /> 

            {/* Cards View */}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between bg-white rounded-xl border border-slate-100 px-4 py-3">
                    <p className="text-sm text-slate-500">
                        Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredChildren.length)} of {filteredChildren.length} children
                    </p>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="rounded-lg" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <Button key={page} variant={currentPage === page ? "default" : "outline"} size="sm" className={`rounded-lg w-8 ${currentPage === page ? 'bg-emerald-500 hover:bg-emerald-600' : ''}`} onClick={() => setCurrentPage(page)}>
                                {page}
                            </Button>
                        ))}
                        <Button variant="outline" size="sm" className="rounded-lg" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}