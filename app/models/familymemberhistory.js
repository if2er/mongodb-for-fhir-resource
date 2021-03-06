// Copyright (c) 2011+, HL7, Inc & The MITRE Corporation
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without modification, 
// are permitted provided that the following conditions are met:
// 
//     * Redistributions of source code must retain the above copyright notice, this 
//       list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright notice, 
//       this list of conditions and the following disclaimer in the documentation 
//       and/or other materials provided with the distribution.
//     * Neither the name of HL7 nor the names of its contributors may be used to 
//       endorse or promote products derived from this software without specific 
//       prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT 
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR 
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
// POSSIBILITY OF SUCH DAMAGE.

var mongoose = require('mongoose');

var FamilyMemberHistorySchema = new mongoose.Schema({
    identifier: [{
        use: String,
        label: String,
        system: String,
        value: String
    }],
    patient: {
    },
    date: Date,
    status: String,
    name: String,
    relationship: {
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    },
    gender: String,
    bornPeriod: {
    },
    bornDate: Date,
    bornString: String,
    ageAge: {
        value: String,
        units: String,
        system: String,
        code: String
    },
    ageRange: {
    },
    ageString: String,
    deceasedBoolean: Boolean,
    deceasedAge: {
        value: String,
        units: String,
        system: String,
        code: String
    },
    deceasedRange: {
    },
    deceasedDate: Date,
    deceasedString: String,
    note: {
    },
    condition: [{
        code: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        outcome: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        onsetAge: {
            value: String,
            units: String,
            system: String,
            code: String
        },
        onsetRange: {
        },
        onsetPeriod: {
        },
        onsetString: String,
        note: {
        }
    }]
});

mongoose.model('FamilyMemberHistory', FamilyMemberHistorySchema);
