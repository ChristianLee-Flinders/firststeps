'use client'
import EntryHome from "@/components/entry/home";
import ParentActions from "@/components/entry/parentActions";
import PinEntry from "@/components/entry/pinEntry";
import StaffActions from "@/components/entry/staffActions";
import VisitorForm from "@/components/entry/visitorForm";
import { dummyParents } from "@/lib/dummyData/parents";
import { dummyStaff } from "@/lib/dummyData/staff";
import { useEffect, useState } from "react";

export type userType = 'staff' | 'parent' | 'visitor';

function EntryPage() {
    const [mode, setMode] = useState('home'); // home, pin-entry, staff-actions, parent-select, visitor-form
    const [userType, setUserType] = useState<userType | null>(null);
    const [pin, setPin] = useState('');
    const [currentUser, setCurrentUser] = useState<(null) | (typeof dummyParents)[0] | (typeof dummyStaff)[0]>(null);
    const [error, setError] = useState('');

    // // Auto-reset to home after 30 seconds of inactivity
    // useEffect(() => {
    //     if (mode !== 'home') {
    //     const timeout = setTimeout(() => {
    //         resetToHome();
    //     }, 30000);
    //     return () => clearTimeout(timeout);
    //     }
    // }, [mode, pin]);

    const resetToHome = () => {
    setMode('home');
    setUserType(null);
    setPin('');
    setCurrentUser(null);
    setError('');
  };


    const handleModeSelect = (type: userType) => {
        setUserType(type);
        if (type === 'visitor') {
        setMode('visitor-form');
        } else {
        setMode('pin-entry');
        }
        setError('');
    };

    const handlePinInput = (digit: string) => {
        if (pin.length < 4) {
        const newPin = pin + digit;
        setPin(newPin);
        
        if (newPin.length === 4) {
            verifyPin(newPin);
        }
        }
    };

    const handlePinDelete = () => {
        setPin(pin.slice(0, -1));
        setError('');
    };

    const verifyPin = async (pinCode: string) => {
        try {
            if (userType === 'staff') {
                const staff = dummyStaff.filter((s) => s.pin_code === pinCode);
                if (staff.length > 0) {
                    setCurrentUser(staff[0]);
                    setMode('staff-actions');
                } else {
                    setError('Invalid PIN');
                    setTimeout(() => setPin(''), 1500);
                }
            } else if (userType === 'parent') {
                const parents = dummyParents.filter((p) => p.pin_code === pinCode);
                if (parents.length > 0) {
                    setCurrentUser(parents[0]);
                    setMode('parent-select');
                } else {
                    setError('Invalid PIN');
                    setTimeout(() => setPin(''), 1500);
                }
            }
        } catch (err) {
            setError('Error verifying PIN');
            setTimeout(() => setPin(''), 1500);
        }
    };

    if (mode === 'home') {
        return <EntryHome onSelect={handleModeSelect} />;
    }

    if (mode === 'pin-entry') {
        return (
            <PinEntry
                pin={pin}
                error={error}
                userType={userType}
                onDigit={handlePinInput}
                onDelete={handlePinDelete}
                onBack={resetToHome}
            />
        );
    }

    if (mode === 'staff-actions') {
        return (
            <StaffActions 
                staff={currentUser as typeof dummyStaff[0]}
                onComplete={resetToHome}
                onBack={resetToHome}
            />
        );
    }

    if (mode === 'parent-actions ') {
        return (
        <ParentActions 
            parent={currentUser as typeof dummyParents[0]}
            onComplete={resetToHome}
            onBack={resetToHome}
        />
        );
    }

    if (mode === 'visitor-form') {
        return (
        <VisitorForm
            onComplete={resetToHome}
            onBack={resetToHome}
        />
        );
    }
}

export default EntryPage