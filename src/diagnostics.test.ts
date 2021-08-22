import rewire from "rewire"
const diagnostics = rewire("./diagnostics")
const formatMessage = diagnostics.__get__("formatMessage")
const formatFileName = diagnostics.__get__("formatFileName")
// @ponicode
describe("diagnostics.loadDiagnostic", () => {
    test("0", () => {
        let callFunction: any = () => {
            diagnostics.loadDiagnostic(undefined, undefined, [-1, 0.5, 1, 2, 3, 4, 5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            diagnostics.loadDiagnostic(undefined, undefined, "/net/panel.dvi.crd")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            diagnostics.loadDiagnostic(undefined, undefined, "/usr/sbin/tan_district.geo.qxt")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            diagnostics.loadDiagnostic(undefined, undefined, ["ponicodeIsAwesome", -0.353, "**Hamburger**", 4653])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            diagnostics.loadDiagnostic(undefined, undefined, "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            diagnostics.loadDiagnostic(undefined, undefined, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("formatMessage", () => {
    test("0", () => {
        let callFunction: any = () => {
            formatMessage("$dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            formatMessage("╷")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            formatMessage("DUMMYNAME╷")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            formatMessage("╷dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            formatMessage("/dummy_name╷╷dummyName123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            formatMessage(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("formatFileName", () => {
    test("0", () => {
        let callFunction: any = () => {
            formatFileName("/tmp/payment_invoice.ogg.cmc", "/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            formatFileName("/var/up_pink.stl.atx", "/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            formatFileName("/etc/ppp/pre_emptive_manager.efif.bcpio", "/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            formatFileName("/usr/sbin/tan_district.geo.qxt", "note.txt")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            formatFileName("/usr/sbin/tan_district.geo.qxt", "script.py")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            formatFileName("", "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
