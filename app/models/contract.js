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

var ContractSchema = new mongoose.Schema({
    identifier: {
        use: String,
        label: String,
        system: String,
        value: String
    },
    issued: Date,
    applies: {
    },
    subject: [{
    }],
    authority: [{
    }],
    domain: [{
    }],
    fhirType: {
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    },
    subType: [{
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    }],
    action: [{
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    }],
    actionReason: [{
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    }],
    actor: [{
        entity: {
        },
        role: [{
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        }]
    }],
    valuedItem: [{
        entityCodeableConcept: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        entityReference: {
        },
        identifier: {
            use: String,
            label: String,
            system: String,
            value: String
        },
        effectiveTime: Date,
        quantity: {
        },
        unitPrice: {
        },
        factor: Number,
        points: Number,
        net: {
        }
    }],
    signer: [{
        fhirType: {
            system: String,
            code: String,
            display: String
        },
        party: {
        },
        signature: String,
    }],
    term: [{
        identifier: {
            use: String,
            label: String,
            system: String,
            value: String
        },
        issued: Date,
        applies: {
        },
        fhirType: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        subType: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        subject: {
        },
        action: [{
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        }],
        actionReason: [{
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        }],
        actor: [{
            entity: {
            },
            role: [{
                coding: [{
                    system: String,
                    code: String,
                    display: String
                }]
            }]
        }],
        text: String,
        valuedItem: [{
            entityCodeableConcept: {
                coding: [{
                    system: String,
                    code: String,
                    display: String
                }]
            },
            entityReference: {
            },
            identifier: {
                use: String,
                label: String,
                system: String,
                value: String
            },
            effectiveTime: Date,
            quantity: {
            },
            unitPrice: {
            },
            factor: Number,
            points: Number,
            net: {
            }
        }],
        group: [{
        }]
    }],
    bindingAttachment: {
    },
    bindingReference: {
    },
    friendly: [{
        contentAttachment: {
        },
        contentReference: {
        }
    }],
    legal: [{
        contentAttachment: {
        },
        contentReference: {
        }
    }],
    rule: [{
        contentAttachment: {
        },
        contentReference: {
        }
    }]
});

mongoose.model('Contract', ContractSchema);
